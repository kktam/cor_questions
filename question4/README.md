# COR Question 4

## Question

> Give an example of how to organize a Git repository so that I can clearly differentiate code
> that is ready for production release, code that is under testing, and code that is under
> active development.
> Explain the workflow that a developer undergo to move code through these stages of development.

## Answer

1. Create a new Git repository for every project.
2. Use Master branch as the final branch for all integration merges. Master branch is also seeding
   branch for a brand new project (repository).
3. Create a branch naming nomenclature that conforms to the numbers of stages in the company's
   development workflow.  For example, if the company has the following practice:

   - developers create feature and submit for project sprints feature integration and merges.
   - developers features are code reviewed for submission is accepted by gatekeeper.
   - features once passed merges will undergo CI(continuous integration) testing.
   - features passed CI testing will be sent to QA system for User Acceptance testing.
   - once UAT tests passed and accepted by stake holders, the QA code get moved and merge into staging. Staging is a environment where the code can be pending production (QA -> stage -> prod), or restored from production to work on emergency patches. Emergency work will bypass the normal Agile SCRUM process (like using Kanban), and must be approved by development managers.
   - code merge into prod (staging -> prod), once a change request is implemented and deployed successfully.  This may be carried out manually or automated by a CI framework.

   In this example the branch nomenclature can be 

### pure Git repository (on-premise Git)


                    |---> create labels - releases each release is a tag on the prod branch
                    |            label can be REL-VERx.yy-YYYY-MM-DD
                    |            where x = major release, yy = minor release
                    |
            |--> prod - production 
            |
            V
    |--> staging  - last environment before deploying to prod
    |      |-->   emergency dev branch can be made here, for emergency patches.
    |
    |--> qa - for UAT testing
    |
    Master - main integration branch - code starts here, and CI is maintained here
    |
    |<--- Team branch  - branch name = T-xxx where xxx = team number, or simply use team name
            |
            |<---  developer branch 


    this style is suitable for regular SCRUM teams that routinely works on a collection of projects.

    project and feature based only work can replace "Team branch" as "Feature branch", with feature names instead.

### hosted Git repository (like Github)

It is better to have production code in master branch, so that it is easier to view the shippable code when someone visit the main page in any Github project. The branches will need to shift a bit differently.

        |---> create labels - releases each release is a tag on the prod branch
        |            label can be REL-VERx.yy  where x = major release, yy = minor release
        |
    Master (prod)
        |--> staging  - last environment before deploying to prod
        |      |-->   emergency dev branch can be made here, for emergency patches.
        |
        |--> qa - for UAT testing
        |
        integration branch - code starts here, and CI is maintained here
        |
        |<--- Team branch  - branch name = T-xxx where xxx = team number, or simply use team name
            |
            |<---  developer branch


Another alternative is to either move the team branch, or the developer branch into a forked project. If the Team is forked, then a Pull Request (PR) will be code reviewed by Gatekeeper before the entire feature work is accepted.

Otherwise if developer individually forked the project, then each developer can initiate their own Pull Request (PR) and launch a much finer grained code review for their work.

