import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import {InputGroup, FormControl} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';





function App() {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Alert key={0} variant='primary'>
    This is a {'primary'} alert—check it out!
  </Alert>
  <Spinner animation='border' />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <Pagination size="lg">{items}</Pagination>

    </>
  );
}

export default App;
