import { Field, Form } from 'react-final-form'
import { Flex, Label } from 'theme-ui'

import { Button, FieldTextarea } from '../'

type EditCommentProps = {
  comment: string
  handleCancel: () => void
  handleSubmit: (commentText: string) => void
}

export const EditComment = (props: EditCommentProps) => {
  const { comment } = props
  return (
    <Form
      onSubmit={() => {
        // do nothing
      }}
      initialValues={{
        comment,
      }}
      render={({ handleSubmit, values }) => (
        <Flex
          as="form"
          sx={{
            flexDirection: 'column',
          }}
          p={2}
          onSubmit={handleSubmit}
        >
          <Label
            as="label"
            htmlFor="comment"
            sx={{ marginBottom: '6px', fontSize: 3 }}
          >
            Edit comment
          </Label>
          <Field name="comment" id="comment" component={FieldTextarea} />
          <Flex mt={4} ml="auto">
            <Button
              small
              mr={4}
              variant="secondary"
              onClick={() => props?.handleCancel()}
            >
              Cancel
            </Button>
            <Button
              type={'submit'}
              aria-label="Save changes"
              small
              onClick={() => {
                props?.handleSubmit(values.comment)
              }}
            >
              Edit
            </Button>
          </Flex>
        </Flex>
      )}
    />
  )
}
