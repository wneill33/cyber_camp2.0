#   oringinal -server 3  
#   docker build -t serverthree . 
#   docker run -d --network mynetwork --name serverfour -p 6770:22 serverfour
# password 'canyonhideout'

FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssh-server grep man-db nmap sudo

RUN rm /etc/legal
RUN rm /etc/update-motd.d/00-header
RUN rm /etc/update-motd.d/10-help-text
RUN rm /etc/update-motd.d/50-motd-news
RUN rm /etc/update-motd.d/60-unminimize
RUN mkdir /run/sshd
RUN chmod 0755 /run/sshd
RUN chown root:root /run/sshd
RUN useradd -ms /bin/bash cyber



COPY ./MotdFile.txt ./etc/motd
COPY ./Training /home/cyber/


RUN echo "cyber:canyonhideout" | chpasswd
RUN usermod -aG sudo cyber

EXPOSE 6770
CMD ["/usr/sbin/sshd", "-D", "-p", "6770"]
