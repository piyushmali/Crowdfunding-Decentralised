# Crowdfunding-Decentralised

This project is a decentralized crowdfunding platform built on the Ethereum blockchain. It allows project creators to raise funds for their projects through contributions from users.

## Smart Contract

The main smart contract of this project is `Crowdfunding.sol`. It contains the following functionalities:

### Enums

- `Status`: Represents the status of a project. It can be one of the following values:
  - `Active`: The project is currently accepting contributions.
  - `Successful`: The project has reached its funding goal.
  - `Failed`: The project did not reach its funding goal within the specified deadline.

### Structs

- `Project`: Represents a crowdfunding project. Each project has the following properties:
  - `creator`: The address of the project creator.
  - `title`: The title of the project.
  - `description`: The description of the project.
  - `goalAmount`: The funding goal amount for the project.
  - `deadline`: The deadline for the project.
  - `raisedAmount`: The total amount raised for the project.
  - `contributorsCount`: The number of contributors to the project.
  - `projectStatus`: The status of the project.

### Storage Variables

- `projects`: An array of all projects created.
- `contributions`: A mapping that stores contributions to projects. It maps a project index to a contributor address and their corresponding contribution amount.

### Events

- `ProjectCreated`: Emitted when a new project is created.
- `Contributed`: Emitted when a contribution is made to a project.
- `Withdrawed`: Emitted when funds are withdrawn from a project.
- `Refunded`: Emitted when a refund is claimed by a contributor.

### Functions

- `createProject`: Creates a new crowdfunding project.
- `contribute`: Contributes funds to a crowdfunding project.
- `withdrawFunds`: Withdraws funds from a successful project.
- `claimRefund`: Claims a refund for a failed project.
- `getProjectDetails`: Retrieves the details of a project.
- `computeStatus`: Computes the status of a project based on its raised amount and deadline.

## Testing

The smart contract is tested using the JavaScript test file `Crowdfunding.js`. It includes various test cases to ensure the correct functionality of the contract.

To run the tests, make sure you have [Hardhat](https://hardhat.org/) installed. Then, execute the following command:

npx hardhat test


## Usage

To use this decentralized crowdfunding platform, you can interact with the `Crowdfunding` smart contract on the Ethereum blockchain. The contract provides functions to create projects, contribute funds, withdraw raised funds, claim refunds, and get project details.

You can deploy the smart contract on a local development network or a public Ethereum network like Ropsten, Rinkeby, or Mainnet. Once deployed, you can interact with the contract using a web3 provider or by directly calling the contract functions through a smart contract wallet.

## Code Coverage Report

This repository contains the code coverage report for the project. The coverage report provides insights into the test coverage of the codebase.

### Folder Structure

The "Coverage" folder contains the following files:

- `lcov-report`: Generated code coverage report in the LCOV format.
- `base.css`: CSS file defining basic styling for the coverage report.
- `coverage-final.json`: Final coverage data in JSON format.
- `index.html`: Main entry point for accessing the coverage report.
- `lcov.info`: Coverage report in LCOV format.
- `prettify.css`: CSS styles for code highlighting using `prettify.js`.
- `prettify.js`: JavaScript library for code highlighting.
- `sort-arrow-sprite.png`: Image file used for sorting columns.
- `sorter.js`: JavaScript file for interactive sorting of data.

### Usage

To view the code coverage report, follow these steps:

1. Clone the repository: `git clone https://github.com/piyushmali/Crowdfunding-Decentralised.git`
2. Navigate to the "Coverage" folder: `cd your-repo/Coverage`
3. Open `index.html` in a web browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
