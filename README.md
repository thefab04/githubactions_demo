#**CI/CD Pipeline with GitHub Actions – Internship Task 2**


##Steps Performed

1.Created GitHub Actions workflow file inside .github/workflows/main.yml
2.Configured pipeline trigger on push to main branch
3.Set up Node.js environment in GitHub runner
4.Installed client and server dependencies
5.Built React production build
6.Created Docker images for client and server
7.Configured Docker Compose for multi-container setup
8.Enabled automated build process on every push
9.Verified successful pipeline execution in GitHub Actions tab
10.Demonstrated automated deployment process


#Pipeline Configuration

##Workflow File Location:

.github/workflows/main.yml


##Pipeline Trigger
on:
  push:
    branches:
      - main


##CI/CD Workflow Stages

1️⃣ Checkout Repository
The runner checks out the latest source code.

2️⃣ Setup Node Environment
Node.js 18 is configured inside GitHub runner.

3️⃣ Install Dependencies
Both frontend and backend dependencies are installed.

4️⃣ Build Application
React production build created
Backend verified

5️⃣ Docker Image Build
Client image built using multi-stage Dockerfile
Server image built using Node base image

6️⃣ Deployment Stage
Docker Compose builds and runs containers automatically.


# Conclusion

##This task demonstrates the implementation of a fully automated CI/CD pipeline using GitHub Actions, where every code push triggers:
-Build process
-Docker image creation
-Deployment workflow
-The pipeline ensures consistent, repeatable, and automated deployment without manual steps.
