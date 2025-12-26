pipeline {
    agent any  // Menentukan di mana job dijalankan (biasanya 'any' untuk pemula)
    stages {
        stage("Docker Compose") {
            steps {
         dir('devops') {
                    script {
                        echo "Saya sedang berada di folder: devops"
                        
                        // Jalankan perintah di sini
                        // Ingat diskusi kita tadi: Gunakan 'docker compose' (tanpa strip) untuk versi baru
                        sh 'docker-compose up -d --build'
                    }
                }   }
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