pipeline {
    agent any
    environment {
        USER = "ubuntu"
        HOST = "192.168.100.86"
    }
    stages {
        stage('Fetch code from Github') {
            steps {
                sh("ssh $USER@$HOST 'sudo rm -r /home/ubuntu/app && mkdir /home/ubuntu/app'")
                sh("ssh $USER@$HOST 'cd /home/ubuntu/app && git clone https://github.com/alfonso-m-g/images-app'")
                sh("ssh $USER@$HOST 'cp -r /home/ubuntu/images /home/ubuntu/app/images-app'")
            }
        }

        stage('Build app on docker') {
            steps {
                sh("ssh $USER@$HOST 'sudo docker stop nginx && sudo docker rm nginx'")
                sh("ssh $USER@$HOST 'sudo docker run -d -it -p 8080:80 -v /home/ubuntu/app/images-app:/usr/share/nginx/html --name nginx nginx:latest'")
            }
        }

        stage('Deploy to production') {
            steps {
                sh("ssh $USER@$HOST './rok.sh'")
            }
        }
    }
}
