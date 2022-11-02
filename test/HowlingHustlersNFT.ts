import { BigNumber, Contract, ContractFactory, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HowlingHustlersNFT Contract", function () {
  let howlingHustlersCF: ContractFactory,
    howlingHustlersC: Contract,
    owner: Signer,
    addrs: Signer[];
  const pubCost: BigNumber = ethers.utils.parseUnits("50", "ether");
  const maxSupply: number = 1000;
  const maxMintAmountPerTx: number = 5;

  this.beforeEach(async function () {
    howlingHustlersCF = await ethers.getContractFactory("HowlingHustlersNFT");
    [owner, ...addrs] = await ethers.getSigners();

    howlingHustlersC = await howlingHustlersCF.deploy();
    await howlingHustlersC.deployed();
  });

  describe("Contract Deployment", function () {
    it("Should be the right owner", async function () {
      expect(await howlingHustlersC.owner()).to.equal(await owner.getAddress());
    });
    it("State variables initiailized correctly", async function () {
      // Checking pubCost
      expect(await howlingHustlersC.pubCost()).to.equal(
        pubCost,
        "pubCost initialized with unexpected value"
      );
      // Checking maxSupply
      expect(await howlingHustlersC.maxSupply()).to.equal(
        maxSupply,
        "maxSupply initialized with unexpected value"
      );
      // Checking maxMintAmountPerTx
      expect(await howlingHustlersC.maxMintAmountPerTx()).to.equal(
        maxMintAmountPerTx,
        "maxMintAmountPerTx initialized with unexpected value"
      );
      // Checking isSaleActive
      expect(
        await howlingHustlersC.isSaleActive(),
        "isSaleActive initialized with unexpected value"
      ).is.false;
      // Checking isRevealed
      expect(
        await howlingHustlersC.isRevealed(),
        "isRevealed initialized with unexpected value"
      ).is.false;
    });
  });

  describe("Minting Functionality", function () {
    it("Testing public mint function", async function () {
      await howlingHustlersC.setIsSaleActive(true);
      await howlingHustlersC.setUriPrefix("ipfs://prefix/");
      await howlingHustlersC.setIsRevealed(true);

      await expect(
        howlingHustlersC.publicMint(2, {
          value: pubCost.mul(2),
        })
      ).to.not.be.reverted;
      const ownedTokens: BigNumber[] = await howlingHustlersC.walletOfOwner(
        owner.getAddress()
      );
      expect(await howlingHustlersC.balanceOf(owner.getAddress())).to.equal(
        ownedTokens.length
      );
      expect(await howlingHustlersC.totalSupply()).to.be.equal(2);

      for (let i = 0; i < ownedTokens.length; i++) {
        expect(await howlingHustlersC.tokenURI(ownedTokens[i])).to.be.equal(
          `${
            (await howlingHustlersC.uriPrefix()) +
            ownedTokens[i] +
            (await howlingHustlersC.uriSuffix())
          }`
        );
      }
    });

    it("mintForAddress should mint for the given address", async function () {});
  });
});

/*
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    return { lock, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { lock, lockedAmount } = await loadFixture(
        deployOneYearLockFixture
      );

      expect(await ethers.provider.getBalance(lock.address)).to.equal(
        lockedAmount
      );
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest();
      const Lock = await ethers.getContractFactory("Lock");
      await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Unlock time should be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture);

        await expect(lock.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        );
      });

      it("Should revert with the right error if called from another account", async function () {
        const { lock, unlockTime, otherAccount } = await loadFixture(
          deployOneYearLockFixture
        );

        // We can increase the time in Hardhat Network
        await time.increaseTo(unlockTime);

        // We use lock.connect() to send a transaction from another account
        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { lock, unlockTime } = await loadFixture(
          deployOneYearLockFixture
        );

        // Transactions are sent using the first signer by default
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { lock, unlockTime, lockedAmount } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw())
          .to.emit(lock, "Withdrawal")
          .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).to.changeEtherBalances(
          [owner, lock],
          [lockedAmount, -lockedAmount]
        );
      });
    });
  });
});

*/
