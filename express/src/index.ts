import express from 'express';
const app =express();

const x = 1

app.get('/', (req,res) =>{
  res.json({
    message: `Hello World! The value of x is ${x}`
  });
});

// Eslint 
// eslint is the linter for JavaScript and TypeScript code.
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})