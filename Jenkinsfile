pipeline {
    agent any  // Menentukan di mana job dijalankan (biasanya 'any' untuk pemula)
    stages {
        stage("Docker Compose") {
            steps {
                sh 'cd devops'
            }
        }

        stage("Running") {
            steps {
                sh 'docker-compose up -d'
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