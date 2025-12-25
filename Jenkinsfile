pipeline {
    agent any  // Menentukan di mana job dijalankan (biasanya 'any' untuk pemula)
    tools{
       nodejs 'node-25.2.1'
    }
    triggers {
        githubPush()
    }
    stages {
        stage("Cek Node") {
            steps {
                sh 'node -v'
                echo 'Cek Node'
            }
        }
        stage('Install') {
            steps {
                // Untuk Linux/Mac gunakan 'sh', untuk Windows gunakan 'bat'
                sh 'npm install' 
                echo 'Selesai install...'
            }
        }
        // Stage 4: Build/Deploy
        stage('Running') {
            steps {
                sh 'npm run dev'
            }
        }
    }
    
    // Blok Post: Jalan setelah semua stage selesai (untuk notifikasi)
    post {
        always {
            echo 'Job selesai (entah sukses atau gagal)'
        }
        success {
            echo 'Yey! Sukses!'
        }
        failure {
            echo 'Yah, gagal. Cek log error.'
        }
    }
}