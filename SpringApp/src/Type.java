package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name="Type")
public class Type {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String type;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}