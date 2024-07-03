const allStoriesBtn = document.getElementById('allStories-btn');
const beautyBtn = document.getElementById('beauty-btn');
const motherhoodBtn = document.getElementById('motherhood-btn');
const mentalHealthBtn = document.getElementById('mentalHealth-btn');
const enterpreneurshipBtn = document.getElementById('enterpreneurship-btn');
const womenInTechBtn = document.getElementById('womenInTech-btn');
const lifestyleAndTravelBtn = document.getElementById('lifestyleAndTravel-btn');

// search icon
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
//search icon

const allStories = document.querySelectorAll('.story');

function hideAllStories() {
    document.querySelector('.all-stories').style.display = 'none';
}

beautyBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.beauty-story').style.display = 'block';
  hideAllStories();
});

motherhoodBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.motherhood-story').style.display = 'block';
  hideAllStories();
});

mentalHealthBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.mentalHealth-story').style.display = 'block';
  hideAllStories();
});

enterpreneurshipBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.enterpreneurship-story').style.display = 'block';
  hideAllStories();
});

womenInTechBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.womenInTech-story').style.display = 'block';
  hideAllStories();
});

lifestyleAndTravelBtn.addEventListener('click', () => {
  allStories.forEach((story) => {
    story.style.display = 'none';
  });
  document.querySelector('.lifestyleAndTravel-story').style.display = 'block';
  hideAllStories();
});

// search icon
searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
  });