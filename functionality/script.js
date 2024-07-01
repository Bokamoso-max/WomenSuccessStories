const allStoriesBtn = document.getElementById('allStories-btn');
const beautyBtn = document.getElementById('beauty-btn');
const motherhoodBtn = document.getElementById('motherhood-btn');
const mentalHealthBtn = document.getElementById('mentalHealth-btn');
const enterpreneurshipBtn = document.getElementById('enterpreneurship-btn');
const womenInTechBtn = document.getElementById('womenInTech-btn');
const lifestyleAndTravelBtn = document.getElementById('lifestyleAndTravel-btn');

const allStories = document.querySelectorAll('.story');

allStoriesBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'block';
  });
});

beautyBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.beauty-story').style.display = 'block';
});

motherhoodBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.motherhood-story').style.display = 'block';
});

mentalHealthBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.mentalHealth-story').style.display = 'block';
});

enterpreneurshipBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.enterpreneurship-story').style.display = 'block';
});

womenInTechBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.womenInTech-story').style.display = 'block';
});

lifestyleAndTravelBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.lifestyleAndTravel-story').style.display = 'block';
});