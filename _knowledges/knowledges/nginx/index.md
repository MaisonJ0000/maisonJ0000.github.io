    server {
        listen       443 ssl;

        ssl_certificate      /usr/local/etc/nginx/mycert/dable.io.crt;
        ssl_certificate_key  /usr/local/etc/nginx/mycert/dable.io.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        server_name localhost;

        location / {
            proxy_pass http://127.0.0.1:3000;
        }
    }

localhost 에 포트를 적지 않고 입력하면 https://localhost => 접속이된다.

server {
listen 443 ssl;
server_name pagestage.devel.kakao.com;

      ssl_certificate /usr/local/etc/openssl@3/certs/localhost.crt;
      ssl_certificate_key /usr/local/etc/openssl@3/certs/localhost.key;

      ssl_session_cache shared:SSL:1m;
      ssl_session_timeout 5m;

      ssl_ciphers HIGH:!aNULL:!MD5;
      ssl_prefer_server_ciphers on;

      location / {
        proxy_pass  http://127.0.0.1:4001;
      }
    }

vi /usr/local/etc/nginx/nginx.conf
nginx -s reload
find / -name nginx.conf
cd /usr/local/etc/openssl@3/certs
ps -ef | grep nginx
