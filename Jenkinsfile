pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Show Git Info') {
            steps {
                bat 'git branch'
                bat 'git log --oneline -5'
                bat 'git rev-parse HEAD'
            }
        }

        stage('Check Node and NPM') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Vue App') {
            steps {
                bat 'npm run build'
            }
        }
    }
}