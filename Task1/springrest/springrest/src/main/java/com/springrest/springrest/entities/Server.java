package com.springrest.springrest.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

//@Document(collection="servers")
public class Server {
	
	@Id
	private long id;
	@Field
	private String name;
	@Field
	private String language;
	@Field
	private String framework;
	
	
	public Server(long id, String name, String language, String framework) {
		super();
		this.id = id;
		this.name = name;
		this.language = language;
		this.framework = framework;
		
	}
	public Server(long id) {
		super();
		this.id = id;
		
	}

	@Override
	public String toString() {
		return "Server [id=" + id+ ",name=" + name + ", language=" + language + ",framework=" + framework+ "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getFramework() {
		return framework;
	}

	public void setFramework(String framework) {
		this.framework = framework;
		
	}
	
	
	public Server() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
