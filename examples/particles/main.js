import V from 'vectorjs';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 720;

document.body.appendChild(canvas);

let particles = [];

const trails = true;

function addParticle(amt = 1) {
  particles.push({
    pos: V(canvas.width / 2 - 2.5, canvas.height / 2),
    vel: V.random(-10, 10),
    speed: Math.random() * 2 + 1
  });

  if (amt > 1)
    addParticle(amt - 1);
}

let last = 0;

const loop = (time) => {
  let delta = time - last;
  last = time;

  requestAnimationFrame(loop);
  tick(delta);
  draw(delta);
};

const tick = (delta) => {
  addParticle((delta / 16) * 10);

  particles = particles.map(particle => {
    var { pos, vel, speed } = particle;

    var outX = (pos.x + vel.x > canvas.width || pos.x + vel.x < 0) ? -1 : 1;
    var outY = pos.y + vel.y > canvas.height ? -1 : 1;

    if (outX != 1 || outY != 1) {
      var decay = V.random(0.5, .99);

      decay.x = outX == -1 ? decay.x * -1 : 1;
      decay.y = outY == -1 ? decay.y * -1 : 1;

      vel = vel.mul(decay);
    }

    vel = vel.add(V(0, 0.1));

    pos = vel.mul(speed).add(pos);

    return {
      pos, vel, speed
    };
  });
}

const draw = (delta) => {
  let fps = (16 / delta) * 60;

  if (trails) {
    ctx.fillStyle = 'rgba(10,10,10,0.2)';
  } else {
    ctx.fillStyle = 'rgb(10,10,10)';
  }

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var color = ctx.fillStyle = `hsl(${(fps * 2).toString(10)},100%,50%)`;

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.fillRect(particle.pos.x, particle.pos.y, 5, 5);
  });

  ctx.fillStyle = '#1e1e1e';

  ctx.fillRect(5, 2, 80, 30)

  ctx.fillStyle = color;

  ctx.fillText('FPS: ' + Math.floor(fps), 10, 15);
  ctx.fillText('Particles: ' + particles.length, 10, 25);
}

loop();
