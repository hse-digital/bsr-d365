
#BSR D365 Solutions

This page documents the process of deploying customizations from DEV to the downstream environments.

[[_TOC_]]

## Solutions

Each squad has 3 main Dynamics 365 solutions: Core, UX and Processes:

![image.png](/images/Item.png)

At all times, there should be a patch for each one of the three solutions:

![image.png](/images/Item (1).png)

Each solution will hold different types of components. The Core solution will hold any kind of table-related components, environment variables, email templates or web resources. Processes solution will hold any kind of processes such as cloud flows or standard workflows. UX solution should only hold a model-driven app or sitemap. **It's very important that this is respected to avoid layering and dependency related issues.** 

**Note**: Devs can work on their own solutions and when dev work is done and the team wishes to push customizations to the downstream environments, the components should added into the respective patches. 

## Patch Submission


In order to submit a patch, the ALM Deployment Canvas App should be used. This app can be found in all DEV environments.

![image.png](/images/item(2).png)

The app allows a single patch submission, and a reviewer should be selected. The user should input the associated work item ids (comma-separated if there's multiple)

If multiple patches need to be submitted, this process needs to be done for each one of those solutions. Once submitted, the reviewer will receive an approval request (Power Automate).

![image.png](/images/item(3).png)


## Patch Approval

When a patch submission is approved, the "Patch Build" pipeline (there's a dedicated one for each squad) is triggered which essentially does the following:
-  Imports the selected patch into the Build environment (unmanaged staging environment). This step serves as a way to validate the deployment of the customizations. Any deployment issues, such as dependencies, should be caught at this stage. If the import is successful, the solution is cloned (the patch and solution are merged into a single solution with the updated components) on both dev and build environments.
- Exports and unpacks the cloned solution from the Build environment and commits its XML files into the code repository (squads' dev branch). Any relevant work items (User Stories or Bugs) will be associated with the changes. 

![image.png](/images/item(4).png)


_Note that the release artifact (release pipeline) is not created at this stage yet._

## Releases

Once the team is happy with the patch submissions and they want to proceed with deployments to the downstream environments, the release artifact needs to be created. This is achieved by manually triggering the "ALM Build" pipeline (there's a dedicated one for each squad).

![image.png](/images/item(5).png)

Once the build is completed, a new release artifact will be created for the respective squad:

![image.png](/images/item(6).png)

Four stages can be found in each release, one for each of the environments: QA, UAT, Pre-Prod and Production. All of these require approval in order for the deployments to start. 

Once a stage is completed, any associated work items (User Stories or Bugs) will be listed within the stage:

![image.png](/images/item(7).png)

