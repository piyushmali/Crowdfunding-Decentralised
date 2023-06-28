async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const Crowdfunding = await ethers.deployContract('Crowdfunding')

  await Crowdfunding.waitForDeployment()

  console.log('Crowdfunding address:', await Crowdfunding.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
