const SHOP_DATA = [ {
  id: 1,
  title: "Cursos Javascript ", 
  routeName: "cursos-javacript",
  items: [{id: 1, title: "Curso Javascript Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 2, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 3, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 4, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]
},
{
  id: 2,
  title: "Cursos Java",
  routeName: "cursos-java",
  items: [{id: 5, title: "Curso Java Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 6, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 7, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 8, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]

},
{
  id: 3,
  title: "Cursos SQL",
  routeName: "curso-javacript",
  items: [{id: 1, title: "Curso SQL Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 9, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 10, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 11, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]
},
{
  id: 4,
  title: "Cursos Php",
  routeName: "cursos-php",
  items: [{id: 12, title: "Curso Php Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 13, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 14, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 15, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]
},
{
  id: 5,
  title: "Cursos Python",
  routeName: "cursos-python",
  items: [{id: 1, title: "Curso Python Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 16, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 17, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 18, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]
},
{
  id: 6,
  title: "Cursos React ",
  routeName: "cursos-react",
  items: [{id: 1, title: "Curso React Udemy", rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 19, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 20, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25},
  {id: 21, title: "Curso Javascript Alura", rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80', price: 25}]
}]


export default SHOP_DATA;