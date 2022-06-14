package com.example.application;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class AppEndpoint {

	Personne test1 = new Personne("test1", "name", "test1@mail.com", "test1 name", null);
	Personne test2 = new Personne("test2", "name", "test2@mail.com", "test2 name", null);
	Personne test3 = new Personne("test3", "name", "test3@mail.com", "test3 name", null);
	Personne test4 = new Personne("test4", "name", "test4@mail.com", "test4 name", null);

	List<Personne> personnes = Arrays.asList(test1, test2, test3, test4);

	public List<Personne> searchPersonne(final String search) {
		List<Personne> results = new ArrayList<>();
		// if search empty no result
		// else return number of results depending on search length, up to 4
		int resultSize = search.length() > 0 ? search.length() : 0;
		for (int i = 0; i < resultSize; i++) {
			if (i < personnes.size()) {
				results.add(personnes.get(i));
			}
		}
		System.out.println("Result Size : " + results.size());
		return results;
	}
}