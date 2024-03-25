#   docker build -t serverfive . 
#   docker run -d --network mynetwork --name serverfive -p 7000:22 serverfive


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


RUN echo "cyber:cyber" | chpasswd
RUN usermod -aG sudo cyber

EXPOSE 8850
CMD ["/usr/sbin/sshd", "-D", "-p", "8850"]
