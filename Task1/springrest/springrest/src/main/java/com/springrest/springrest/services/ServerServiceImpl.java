package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.springrest.springrest.entities.Server;


@Service
public class ServerServiceImpl implements ServerService {
	//implementing ServerService interface
	
	List<Server> list;
	
	
	public ServerServiceImpl() {
		
		list = new ArrayList<Server>();
		list.add(new Server(0,"Ubuntu","Python","dJango" ));
		list.add(new Server(1,"Kali","JavaScript","NodeJS"));
		list.add(new Server(2,"Windows","Golang","C++"));
		list.add(new Server(3,"Windows","C++", "c#"));
	}
	@Override
	public List<Server> getServers() {
		
		return list;
	}
	
	@Override
	public List<Server> getServerById(long serverId) {
	
			List<Server> n;
		
			n = new ArrayList<>();
			for(Server server:list){
				
				if(server.getId()==serverId) {
					
					n.add(server);
			
				}
			}
			return n;
	}
	
	@Override
	public List<Server> getServer(String serverName) {
		List<Server> m;
		
		
		m = new ArrayList<>();
		for(Server server:list){
			
			if(serverName.equalsIgnoreCase(server.getName())) {
				
				m.add(server);
	
			}
		}
		return m;
		
	}
	
	
	
	@Override
	public Server addServer(Server server){
		for(Server obj:list) {
			if(obj.getId()==server.getId()) {
				return server;
				
			}else {
				list.add(server);
			}
			
		}
		return server;
	}
	
	@Override
	public Server deleteServer(long serverId) {
		
		
		for(Server server:list) {
			if(server.getId()==serverId) {
				
				list.remove(server);
				
			}
		}
		
		
		
		return null;
	}
	
	@Override
	public Server updateServer(Map<String ,String> newServer ,long serverId) {
		

		for(Server obj:list) {
			if(obj.getId()==serverId) {
				for(Map.Entry<String,String> entry:newServer.entrySet()) {
					if(entry.getKey().equalsIgnoreCase("name")) {
						obj.setName(entry.getValue());
					}
					if(entry.getKey().equalsIgnoreCase("language")) {
						obj.setLanguage(entry.getValue());
					}
					if(entry.getKey().equalsIgnoreCase("framework")) {
						obj.setFramework(entry.getValue());
					}
					
				}
			}
		}
		
		
		return null;
	}
	
	
//	@Override
//	public <S extends Server> S insert(S entity) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> List<S> insert(Iterable<S> entities) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> List<S> findAll(Example<S> example) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> List<S> findAll(Example<S> example, Sort sort) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> List<S> saveAll(Iterable<S> entities) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public List<Server> findAll() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public List<Server> findAllById(Iterable<Long> ids) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> S save(S entity) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public Optional<Server> findById(Long id) {
//		// TODO Auto-generated method stub
//		return Optional.empty();
//	}
//	@Override
//	public boolean existsById(Long id) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//	@Override
//	public long count() {
//		// TODO Auto-generated method stub
//		return 0;
//	}
//	@Override
//	public void deleteById(Long id) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public void delete(Server entity) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public void deleteAllById(Iterable<? extends Long> ids) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public void deleteAll(Iterable<? extends Server> entities) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public void deleteAll() {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public List<Server> findAll(Sort sort) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public Page<Server> findAll(Pageable pageable) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> Optional<S> findOne(Example<S> example) {
//		// TODO Auto-generated method stub
//		return Optional.empty();
//	}
//	@Override
//	public <S extends Server> Page<S> findAll(Example<S> example, Pageable pageable) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public <S extends Server> long count(Example<S> example) {
//		// TODO Auto-generated method stub
//		return 0;
//	}
//	@Override
//	public <S extends Server> boolean exists(Example<S> example) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//	@Override
//	public <S extends Server, R> R findBy(Example<S> example, Function<FetchableFluentQuery<S>, R> queryFunction) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
}
