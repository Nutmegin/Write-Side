import app from 'ampersand-app';

export default {
  create() {
    this.playMusic();
    this.showLogo();
    this.game.time.events.add(9250, this.showStory, this );
    this.game.time.events.add(11500, this.translateCanvas, this );
    this.game.time.events.add(70000, this.showInfo, this );
  },

  playMusic() {
    app.music = this.game.add.audio('music');
    app.music.play();

    this.game.onPause.add(this.pauseMusic, this);
    this.game.onResume.add(this.resumeMusic, this);
  },

  pauseMusic() {
    app.music.pause();
  },

  resumeMusic() {
    app.music.resume();
  },

  showLogo() {
    document.body.classList.add('body-stars');

    this.logoText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Pitch Slam', {
      font: '140px sf_distant_galaxyregular',
      fill: 'rgb(0,0,0)',
      stroke: '#ff6',
      strokeThickness: 10,
      align: 'center'
    });

    this.logoText.anchor.setTo(0.5, 0.5);
    this.logoText.scale.setTo(1.5, 1.5);
    this.positionTween = this.game.add.tween(this.logoText).to({ y: '-50' }, 14000, Phaser.Easing.Linear.Out, true);
    this.logoTween = this.game.add.tween(this.logoText.scale).to({ x: 0, y: 0 }, 12000, Phaser.Easing.Linear.Out, true);
    this.alphaTween = this.game.add.tween(this.logoText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.In, true, 10500);
  },

  showStory() {
    this.storyGroup = this.game.add.group();

    this.storyText1 = this.game.add.text(this.game.width * 0.5, this.game.height * 1.3, 'Episode EyeExEye\nThe Write Side', {
      font: `700 60px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width - 50,
      align: 'center'
    });

    this.storyText1.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText1);

    this.storyText2 = this.game.add.text(this.game.width * 0.5, this.storyText1.y + this.storyText1.height + 50, "The empire known as the Industry is on the lookout for talented writers who can satisfy the needs of its people: The Readers. These writers will provide new stories to bolster the Empires force's against an evil old as the galaxy itself...boredom.", {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText2.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText2);

    this.storyText3 = this.game.add.text(this.game.width * 0.5, this.storyText2.y + this.storyText2.height + 100, "Boredom is an ancient tool utilized by those who wield the Dark Side of the Force, a tool many thought lost beneath the waves of time, until now. Rumor spreads of dark figures able to drain Readers of their energy and excitement, leaving them dazed and lethargic. Boredom has been weaponized once again.", {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText3.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText3);

    this.storyText4 = this.game.add.text(this.game.width * 0.5, this.storyText3.y + this.storyText3.height + 50, "To help the Industry combat this menace, the Jedi council has dispatched several of its prominent masters to seek out those gifted in the Force, to train them as Jedi Knights in the fight against this evil. As Boredom spreads, it's a race against time before all is consumed.....", {
      font: `700 44px "${ app.fontFamily }"`,
      fill: '#ff6',
      wordWrap: true,
      wordWrapWidth: this.game.width
    });

    this.storyText4.anchor.setTo(0.5, 1);

    this.storyGroup.add(this.storyText4);

    this.storyTween = this.game.add.tween(this.storyGroup).to({ y: -(this.game.height * 3) }, 71000, Phaser.Easing.Linear.InOut, true);
  },

  translateCanvas() {
    document.getElementById('game').classList.add('container-story');
  },

  showInfo() {
    document.body.classList.remove('body-stars');
    document.getElementById('game').classList.remove('container-story');
    this.game.state.start('Info');
  }
};
