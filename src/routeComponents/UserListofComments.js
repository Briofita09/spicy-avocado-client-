import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

function UserComments() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await api.get("/profile/userComments");
        console.log(response.data);
        setState([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, []);
  console.log(state);
  return (
    <div>
      <NavBar />
      <table>
        <tbody>
          {state.map((comment) => {
            return (
              <div>
                <tr>
                  <td>{comment.title}</td>
                  <td>{comment.comment}</td>
                  <td>
                    <Link to="/:commentId/edit-comment">
                      <button>Editar Comentario</button>
                    </Link>

                    <button>Deletar comentario</button>
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserComments;
