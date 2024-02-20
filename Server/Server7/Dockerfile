#   docker build -t serverfour . 
#   docker run -d --network mynetwork --name serverfour -p 7000:22 serverfour


FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssh-server

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
EXPOSE 6771
CMD ["/usr/sbin/sshd", "-D", "-p", "6771"]