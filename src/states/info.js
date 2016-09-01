import app from 'ampersand-app';

export default {
  create() {
    this.fadeMusic();
    this.showLuke();
    this.showLogo();
    this.showInfo();
    this.showRsvp();
  },

  fadeMusic() {
    app.music.fadeOut(14000);
  },

  showLuke() {
    this.luke = this.game.add.sprite(-500, 55, 'luke');
    this.game.add.tween(this.luke).to({ x: 30 }, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.saber = this.game.add.audio('saber');
    this.saber.play();
  },

  showLogo() {
    this.logoText = this.game.add.text(410, 60, 'Louis\' 5th\nBirthday', {
      font: '75px sf_distant_galaxyregular',
      fill: 'rgb(0,0,0)',
      stroke: '#ff6',
      strokeThickness: 6,
      align: 'center'
    });

    this.logoTween = this.game.add.tween(this.logoText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },

  showInfo() {
    // Type in the invite details
    this.infoText = this.game.add.text(410, 250, 'Entry window opens.\n7 Sept 2016, 12.00am - 11:59pm Eastern time.\nMay the Force Be With You.', {
      font: `20px "${ app.fontFamily }"`,
      fill: '#fff',
      wordWrap: true,
      wordWrapWidth: 510,
      align: 'center'
    });

    this.infoTextTween = this.game.add.tween(this.infoText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },

  showRsvp() {
    this.showRsvpButton();
    this.showEmailLink();
    this.showPhoneNumber();
  },

  showRsvpButton() {
    this.rsvpButton = this.game.add.sprite(460, this.infoText.y + this.infoText.height + 30, 'rsvp');
    this.rsvpButton.inputEnabled = true;
    this.rsvpButton.input.useHandCursor = true;
    this.rsvpButton.events.onInputUp.add(() => {
      window.open('https://pitchslamcontest.com', '_blank');
    });

    this.rsvpButtonTween = this.game.add.tween(this.rsvpButton).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },

  showEmailLink() {
    this.emailText = this.game.add.text(this.rsvpButton.x + this.rsvpButton.width + 20, this.rsvpButton.y + 10, 'elle@pitchslamcontest.com', {
      font: `20px "${ app.fontFamily }"`,
      fill: 'rgb(75, 213, 238)',
      wordWrap: true,
      wordWrapWidth: 450,
      align: 'center'
    });

    this.emailText.inputEnabled = true;
    this.emailText.input.useHandCursor = true;
    this.emailText.events.onInputUp.add(() => {
      window.open('mailto:elle@pitchslamcontest.com');
    });

    this.emailTextTween = this.game.add.tween(this.emailText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  },

  showPhoneNumber() {
    this.phoneText = this.game.add.text(this.rsvpButton.x + this.rsvpButton.width + 20, this.rsvpButton.y + 40, 'http://pitchslamcontest.com', {
      font: `20px "${ app.fontFamily }"`,
      fill: '#fff',
      wordWrap: true,
      wordWrapWidth: 450,
      align: 'center'
    });

    this.phoneTextTween = this.game.add.tween(this.phoneText).from({ alpha: 0 }, 3000,  Phaser.Easing.Quadratic.Out, true );
  }
};
