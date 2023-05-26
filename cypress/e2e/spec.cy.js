// #1
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//     cy.get('input[data-cy="song-title"]').type("Lolipop")
//     cy.get('input[data-cy="song-artist"]').type("Lil Wayne")
//     cy.get('input[data-cy="song-album"]').type("The Carter 3")
//     cy.get('input[data-cy="song-genre"]').type("Rap")
//     cy.get('input[data-cy="song-release-date"]').type("2007-05-02")
//     cy.get('input[data-cy="song-running-time"]').type("120")
//     cy.get('button[data-cy="song-submit"]').click();

//   })
// })
//#2
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//     cy.get('input[data-cy="search-bar"]')
//     .type("Lolipop")
//     .wait(500)
   
//   })
// })

//#3
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/')
//     cy.get('table')
//     .contains('td', 'Lolipop')
//     .siblings('td')
//     .contains("Delete")
//     .click()
    
   
//   })
// })

//#Bonus 1



// describe('template spec', () => {
//     before(() => {
//       cy.visit('http://localhost:3000/');
//     });
  
//     beforeEach(() => {
//       cy.get('table')
//         .contains('td', 'Lolipop')
//         .siblings('td')
//         .contains("Edit Song")
//         .click();
//     });
  
//     it('passes', () => {
//       cy.get('input[data-cy="title-edit"]').clear();
//       cy.get('input[data-cy="artist-edit"]').clear();
//       cy.get('input[data-cy="album-edit"]').clear();
//       cy.get('input[data-cy="genre-edit"]').clear();
//       cy.get('input[data-cy="rd-edit"]').clear();
//       cy.get('input[data-cy="rt-edit"]').clear();
      
//     });
  
//     afterEach(() => {
//       cy.get('input[data-cy="title-edit"]').type('All My Life');
//       cy.get('input[data-cy="artist-edit"]').type('Lil Durk FT J.Cole');
//       cy.get('input[data-cy="album-edit"]').type('Almost Healed');
//       cy.get('input[data-cy="genre-edit"]').type('Rap');
//       cy.get('input[data-cy="rd-edit"]').type('2023-05-26');
//       cy.get('input[data-cy="rt-edit"]').type('120');
     
//     });
  
//     after(() => {
//       cy.contains("Update Song").click()
//     });
//   });
  