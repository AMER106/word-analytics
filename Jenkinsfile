pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

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
                bat 'npm ci'
            }
        }

        stage('Build Vue App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Build Artifact') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'CI pipeline completed successfully. Vue dist folder archived.'
        }

        failure {
            echo 'CI pipeline failed. Check the console output.'
        }
    }
}