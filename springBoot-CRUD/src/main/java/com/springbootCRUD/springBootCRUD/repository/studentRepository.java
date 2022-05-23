package com.springbootCRUD.springBootCRUD.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springbootCRUD.springBootCRUD.model.Student;
@Repository
public interface studentRepository extends CrudRepository<Student, Integer>{

}
