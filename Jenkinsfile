pipeline {
    agent any  // Menentukan di mana job dijalankan (biasanya 'any' untuk pemula)
    stages {
        stage('Install') {
            steps {
                // Untuk Linux/Mac gunakan 'sh', untuk Windows gunakan 'bat'
                sh 'npm install' 
                echo 'Selesai install...'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        // Stage 4: Build/Deploy
        stage('Build') {
            steps {
                sh 'npm run build'
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