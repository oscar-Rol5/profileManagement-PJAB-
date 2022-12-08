package com.example.demo;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MainController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TypeRepository typeRepository;

	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@PostMapping("/types")
	void addType(@RequestBody Type type) {
		typeRepository.save(type);
	}
	
	@PostMapping("/usersd")
	void deleteUser(@RequestBody User user) {
		userRepository.delete(user);
	}
	
	@PostMapping("/typesd")
	void deleteUser(@RequestBody Type type) {
		typeRepository.delete(type);
	}
	
	@GetMapping("/users")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/types")
	public @ResponseBody Iterable<Type> getAllTypes(){
		return typeRepository.findAll();
	}
	
}
