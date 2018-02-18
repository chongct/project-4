import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const Search = (props) => {
    return (
      <div>
        <Form>
        <FormGroup>
          <Input id="searchKeyword" type="text" name="text" placeholder="Search for a place" onChange={props.searchMethod} />
        </FormGroup>
      </Form>
      </div>
    )
  }


export default Search
