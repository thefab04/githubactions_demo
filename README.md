**CI/CD Pipeline with GitHub Actions – Internship Task 2**


Steps Performed

Created GitHub Actions workflow file inside .github/workflows/main.yml

Configured pipeline trigger on push to main branch

Set up Node.js environment in GitHub runner

Installed client and server dependencies

Built React production build

Created Docker images for client and server

Configured Docker Compose for multi-container setup

Enabled automated build process on every push

Verified successful pipeline execution in GitHub Actions tab

Demonstrated automated deployment process


Pipeline Configuration

Workflow File Location:

.github/workflows/main.yml
Pipeline Trigger
on:
  push:
    branches:
      - main


CI/CD Workflow Stages

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

Automated Deployment Process

Deployment is triggered automatically when:

Code is pushed to main

Pull request is merged into main

GitHub Actions:

Builds Docker images

Starts containers

Ensures application is production-ready

No manual intervention required.


DevOps Concepts Demonstrated

Continuous Integration

Continuous Deployment

Automated builds

Containerization

GitHub Actions workflow automation

Multi-stage Docker builds

Conclusion

This task demonstrates the implementation of a fully automated CI/CD pipeline using GitHub Actions, where every code push triggers:

Build process

Docker image creation

Deployment workflow

The pipeline ensures consistent, repeatable, and automated deployment without manual steps.
