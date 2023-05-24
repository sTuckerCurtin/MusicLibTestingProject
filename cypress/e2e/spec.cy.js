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

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[data-cy="search-bar"]').type("Lolipop").wait(500)
   
  })
})
