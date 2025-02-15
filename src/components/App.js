import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [currentPage, setCurrentPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
      <AdminNavBar PageChange={setCurrentPage} />
      {currentPage === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;