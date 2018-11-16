FROM node:8

ENV USER=app

ENV SUBDIR=appDir

RUN useradd --user-group --create-home --shell /bin/false $USER 


ENV HOME=/home/$USER

COPY . . $HOME/$SUBDIR/

RUN chown -R $USER:$USER $HOME/*

USER $USER

WORKDIR $HOME/$SUBDIR

RUN npm install

CMD ["npm", "start"]