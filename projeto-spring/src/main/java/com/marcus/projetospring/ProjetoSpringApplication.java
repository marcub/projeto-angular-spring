package com.marcus.projetospring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.marcus.projetospring.model.Expense;
import com.marcus.projetospring.repository.ExpenseRepository;

@SpringBootApplication
public class ProjetoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(ExpenseRepository expenseRepository) {
		return args -> {
			expenseRepository.deleteAll();
			Expense a = new Expense();
			a.setDescription("Feira");
			a.setCategory("Mercado");
			expenseRepository.save(a);
		};
	}
}
