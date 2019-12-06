import { useState } from 'react';
import { useRouter } from 'next/router';
import { Header, Button, Modal } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

function ProductAttributes({ description, _id }) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } };
    await axios.delete(url, payload);
    router.push('/');
  }

  return (
    <>
      <Header as='h3'>About this product</Header>
      <p>{description}</p>
      <Button
        icon='trash alternate outline'
        color='red'
        content='Delete Product'
        onClick={() => setModal(true)}
      />
      <Modal open={modal} dimmer='blurring'>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>Are you sure you want to delete this product?</Modal.Content>
        <Modal.Actions>
          <Button content='Cancel' onClick={() => setModal(false)}></Button>
          <Button
            negative
            icon='trash'
            labelPosition='right'
            content='Delete'
            onClick={handleDelete}
          ></Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
