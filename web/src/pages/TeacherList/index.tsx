import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TeacherItem from "../../components/TeacherItem";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
        <Select 
            name="subject" 
            label="Materia"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciencias', label: 'Ciencias' },
              { value: 'Educação fisica', label: 'Educação fisica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Geogragia', label: 'Geogragia' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Quimica', label: 'Qumica' },
            ]}
          />
          <Select 
            name="week-day" 
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input type="time" name="subject" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
