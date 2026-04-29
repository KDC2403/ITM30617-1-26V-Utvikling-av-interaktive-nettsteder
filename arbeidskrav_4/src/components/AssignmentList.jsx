import { useEffect, useState } from 'react'
import { client } from '../sanity/client'

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "assignment"]`)
      .then((data) => setAssignments(data))
  }, [])

  return (
    <section>
      {assignments.map((assignment) => (
        <article key={assignment._id}>
          <h3>{assignment.title}</h3>
          <p>{assignment.description}</p>
        </article>
      ))}
    </section>
  )
}