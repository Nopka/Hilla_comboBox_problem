package com.example.application;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Personne {
	private String nom;
	private String prenom;
	private String email;
	private String displayName;
	private String nickname;
	private String appellation;

	public Personne(String nom, String prenom, String email, String displayname, String nickname) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.displayName = displayname;
		this.nickname = nickname;
		if (nickname != null) {
			this.appellation = displayname + "(" + nickname + ")";
		} else {
			this.appellation = displayname;
		}

	}

	public Personne() {
		super();
	}

}