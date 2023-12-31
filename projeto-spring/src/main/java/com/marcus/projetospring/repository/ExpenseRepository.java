package com.marcus.projetospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcus.projetospring.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
