pipeline {

    agent any

    environment {
        IMAGE_NAME = "playwrightautomation"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                    if exist playwright-report rmdir /s /q playwright-report
                    if exist allure-results rmdir /s /q allure-results

                    mkdir playwright-report
                    mkdir allure-results

                    docker run --rm ^
                      -v "%WORKSPACE%\\playwright-report:/app/playwright-report" ^
                      -v "%WORKSPACE%\\allure-results:/app/allure-results" ^
                      %IMAGE_NAME%
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true

            archiveArtifacts artifacts: 'allure-results/**',
                             allowEmptyArchive: true
        }
    }
}