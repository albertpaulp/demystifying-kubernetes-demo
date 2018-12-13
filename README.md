# demystifying-kubernetes-demo
Demo project for Demystifying Kubernetes Project

## Pre-Requesites
  
- brew install docker
- brew cask install minikube
- brew cask install virtualbox
- brew install kubernetes-cli

## Steps to create a deployment

- minikube start #Start local minikube node
- kubectl create -f deployment.yaml #Creating deployment
- kubectl create -f service.yaml #Creating service
- minikube service demogod-service --url #Getting url of service
