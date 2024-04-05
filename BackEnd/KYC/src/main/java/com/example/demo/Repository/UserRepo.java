package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.UserDetails;


@Repository
public interface UserRepo extends CrudRepository<UserDetails, Integer>  {
	

	@Query(value = "SELECT registration(:username, :email, :password)", nativeQuery = true)
	    int addData(@Param("username") String username, @Param("email") String email, @Param("password") String password);

	@Query("SELECT u FROM UserDetails u WHERE u.email = :mail" )
	UserDetails getUserData(@Param("mail") String email);
	
	@Modifying
	@Query("SELECT u FROM UserDetails u")
	List<UserDetails> getAll();

}
