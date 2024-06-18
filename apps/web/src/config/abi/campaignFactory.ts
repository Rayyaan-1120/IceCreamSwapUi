export const campaignFactoryABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "campaign",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CampaignAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "campaign",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collected",
        type: "uint256"
      }
    ],
    name: "CampaignLocked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "campaign",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "CampaignUnlocked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "campaignsByUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "softCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "hardCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lockDuration",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "liquidityPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPeriod",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool"
          }
        ],
        internalType: "struct IIceCreamSwapLaunchPad.CampaignData",
        name: "_data",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_raisedToken",
        type: "address"
      }
    ],
    name: "createCampaign",
    outputs: [
      {
        internalType: "address",
        name: "campaign_address",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "softCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "hardCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lockDuration",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "liquidityPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPeriod",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool"
          }
        ],
        internalType: "struct IIceCreamSwapLaunchPad.CampaignData",
        name: "_data",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_raisedToken",
        type: "address"
      }
    ],
    name: "createCampaignWithOwner",
    outputs: [
      {
        internalType: "address",
        name: "campaign_address",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserCampaigns",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_v2DexFactory",
        type: "address"
      },
      {
        internalType: "address",
        name: "_v2DexRouter",
        type: "address"
      },
      {
        internalType: "address",
        name: "_tokenLock",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_raisedFee",
        type: "uint256"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "nativeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "raisedFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nativeFee",
        type: "uint256"
      }
    ],
    name: "setNativeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_raisedFee",
        type: "uint256"
      }
    ],
    name: "setRaisedFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenLock",
        type: "address"
      }
    ],
    name: "setTokenLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_v2DexFactory",
        type: "address"
      }
    ],
    name: "setV2DexFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_v2DexRouter",
        type: "address"
      }
    ],
    name: "setV2DexRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenLock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "softCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "hardCap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxAllowed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lockDuration",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "liquidityPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "vestingPeriod",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "whitelistEnabled",
            type: "bool"
          }
        ],
        internalType: "struct IIceCreamSwapLaunchPad.CampaignData",
        name: "_data",
        type: "tuple"
      }
    ],
    name: "tokensNeeded",
    outputs: [
      {
        internalType: "uint256",
        name: "campaignTokens",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "v2DexFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "v2DexRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
] as const