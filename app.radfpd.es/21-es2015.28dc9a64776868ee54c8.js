(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5bAz":function(t,i,e){"use strict";e.r(i),e.d(i,"EntidadesModule",(function(){return lt}));var o=e("ofXK"),n=e("tyNb"),a=e("mrSG"),d=e("M9IT"),c=e("+0xr"),r=e("Dh3D"),s=e("3Pt+"),l=e("Xksa"),b=e("fXoL"),m=e("0IaG"),h=e("dNgK"),u=e("DrcZ"),p=e("xMg3"),f=e("QzrE"),g=e("fUJ1"),S=e("am6X"),v=e("kmnG"),C=e("qFsG"),R=e("d3UM"),k=e("FKr1"),_=e("bTqV");function w(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_zona),b.Bb(1),b.Ec(" ",t.zona," ")}}function E(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_contacto),b.Bb(1),b.Ec(" ",t.nombre_completo," ")}}function N(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_tipo_entidad),b.Bb(1),b.Ec(" ",t.tipo_entidad," ")}}function B(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_provincia),b.Bb(1),b.Ec(" ",t.provincia," ")}}let y=(()=>{class t{constructor(t,i,e,o,n,a,d){this.dialogRef=t,this.snackBar=i,this.servicioEntidades=e,this.servicioProvincia=o,this.servicioZona=n,this.servicioTipoEntidad=a,this.servicioContactos=d}ngOnInit(){this.entidadForm=new s.h({entidad:new s.e(null,s.v.required),id_zona:new s.e(null,s.v.required),id_contacto:new s.e(null),id_tipo_entidad:new s.e(null),direccion:new s.e(null),cp:new s.e(null),localidad:new s.e(null),id_provincia:new s.e(null),telefono:new s.e(null),email:new s.e(null),web:new s.e(null),codigo:new s.e(null),observaciones:new s.e(null)}),this.ENTIDAD=l.e,this.getProvincias(),this.getZonas(),this.getTiposEntidad(),this.getDinamizadores()}confirmAdd(){return Object(a.a)(this,void 0,void 0,(function*(){if(this.entidadForm.valid){const t=this.entidadForm.value,i=yield this.servicioEntidades.addEntidad(t).toPromise();i.ok?(this.snackBar.open(i.message,l.a,{duration:5e3}),this.dialogRef.close({ok:i.ok,data:i.data})):this.snackBar.open(i.message,l.a,{duration:5e3})}else this.snackBar.open(l.n,l.a,{duration:5e3})}))}getProvincias(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioProvincia.getAllProvincias().toPromise();t.ok&&(this.provincias=t.data)}))}getZonas(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioZona.getAllZonas().toPromise();t.ok&&(this.zonas=t.data)}))}getTiposEntidad(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioTipoEntidad.getAllTiposEntidad().toPromise();t.ok&&(this.tipos_entidad=t.data)}))}getDinamizadores(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioContactos.getAllDinamizadores().toPromise();t.ok&&(this.contactos=t.data)}))}onNoClick(){this.dialogRef.close({ok:!1})}}return t.\u0275fac=function(i){return new(i||t)(b.Mb(m.f),b.Mb(h.a),b.Mb(u.a),b.Mb(p.a),b.Mb(f.a),b.Mb(g.a),b.Mb(S.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-add-entidad"]],decls:68,vars:7,consts:[[1,"container"],["mat-dialog-title",""],[1,"mat-dialog-content",3,"formGroup"],[1,"form"],["color","accent"],["matInput","","placeholder","Entidad","formControlName","entidad","name","entidad","maxlength","100","required",""],["matInput","","placeholder","C\xf3digo/CIF/NIF","formControlName","codigo","name","codigo","maxlength","100"],["formControlName","id_zona","required",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","id_contacto","required",""],["formControlName","id_tipo_entidad","required",""],["matInput","","placeholder","Direcci\xf3n","formControlName","direccion","name","direccion","maxlength","100"],["matInput","","placeholder","CP","formControlName","cp","name","cp","maxlength","100"],["matInput","","placeholder","Localidad","formControlName","localidad","name","localidad","maxlength","100"],["formControlName","id_provincia"],["matInput","","placeholder","Tel\xe9fono","formControlName","telefono","name","telefono","maxlength","100"],["matInput","","placeholder","Email","formControlName","email","name","email","maxlength","100"],["matInput","","placeholder","Web","formControlName","web","name","web","maxlength","100"],["matInput","","placeholder","Observaciones","formControlName","observaciones","name","Observaciones"],["mat-dialog-actions",""],["mat-button","","id","onSubmit","type","submit",3,"disabled","click"],["mat-button","","id","onNoClick","tabindex","-1",3,"click"],[3,"value"]],template:function(t,i){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h3",1),b.Cc(2),b.Rb(),b.Sb(3,"form",2),b.Sb(4,"div",3),b.Sb(5,"mat-form-field",4),b.Nb(6,"input",5),b.Rb(),b.Rb(),b.Sb(7,"div",3),b.Sb(8,"mat-form-field",4),b.Nb(9,"input",6),b.Rb(),b.Rb(),b.Sb(10,"div",3),b.Sb(11,"mat-form-field"),b.Sb(12,"mat-label"),b.Cc(13,"Zona"),b.Rb(),b.Sb(14,"mat-select",7),b.Sb(15,"mat-option",8),b.Cc(16,"Sin zona"),b.Rb(),b.Bc(17,w,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(18,"div",3),b.Sb(19,"mat-form-field"),b.Sb(20,"mat-label"),b.Cc(21,"Dinamizador/a"),b.Rb(),b.Sb(22,"mat-select",10),b.Sb(23,"mat-option",8),b.Cc(24,"Sin dinamizador/a"),b.Rb(),b.Bc(25,E,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(26,"div",3),b.Sb(27,"mat-form-field"),b.Sb(28,"mat-label"),b.Cc(29,"Tipo Entidad"),b.Rb(),b.Sb(30,"mat-select",11),b.Sb(31,"mat-option",8),b.Cc(32,"Sin tipo entidad"),b.Rb(),b.Bc(33,N,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(34,"div",3),b.Sb(35,"mat-form-field",4),b.Nb(36,"input",12),b.Rb(),b.Rb(),b.Sb(37,"div",3),b.Sb(38,"mat-form-field",4),b.Nb(39,"input",13),b.Rb(),b.Rb(),b.Sb(40,"div",3),b.Sb(41,"mat-form-field",4),b.Nb(42,"input",14),b.Rb(),b.Rb(),b.Sb(43,"div",3),b.Sb(44,"mat-form-field"),b.Sb(45,"mat-label"),b.Cc(46,"Provincia"),b.Rb(),b.Sb(47,"mat-select",15),b.Sb(48,"mat-option",8),b.Cc(49,"Sin provincia"),b.Rb(),b.Bc(50,B,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(51,"div",3),b.Sb(52,"mat-form-field",4),b.Nb(53,"input",16),b.Rb(),b.Rb(),b.Sb(54,"div",3),b.Sb(55,"mat-form-field",4),b.Nb(56,"input",17),b.Rb(),b.Rb(),b.Sb(57,"div",3),b.Sb(58,"mat-form-field",4),b.Nb(59,"input",18),b.Rb(),b.Rb(),b.Sb(60,"div",3),b.Sb(61,"mat-form-field",4),b.Nb(62,"textarea",19),b.Rb(),b.Rb(),b.Sb(63,"div",20),b.Sb(64,"button",21),b.Zb("click",(function(){return i.confirmAdd()})),b.Cc(65,"Guardar"),b.Rb(),b.Sb(66,"button",22),b.Zb("click",(function(){return i.onNoClick()})),b.Cc(67,"Cancelar"),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(2),b.Ec("A\xf1adir ",i.ENTIDAD,""),b.Bb(1),b.jc("formGroup",i.entidadForm),b.Bb(14),b.jc("ngForOf",i.zonas),b.Bb(8),b.jc("ngForOf",i.contactos),b.Bb(8),b.jc("ngForOf",i.tipos_entidad),b.Bb(17),b.jc("ngForOf",i.provincias),b.Bb(14),b.jc("disabled",!i.entidadForm.valid))},directives:[m.g,s.w,s.p,s.i,v.c,C.b,s.c,s.o,s.g,s.k,s.u,v.f,R.a,k.n,o.k,m.c,_.a],styles:[".container[_ngcontent-%COMP%]{margin:0 auto;min-width:30em;text-align:center;padding-top:10px}div.mat-dialog-actions[_ngcontent-%COMP%]{width:12em;margin:auto}.radioButton[_ngcontent-%COMP%]{text-align:left;margin-bottom:1em;padding-left:.2em}"]}),t})();function O(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_zona),b.Bb(1),b.Ec(" ",t.zona," ")}}function P(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_contacto),b.Bb(1),b.Ec(" ",t.nombre_completo," ")}}function j(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_tipo_entidad),b.Bb(1),b.Ec(" ",t.tipo_entidad," ")}}function D(t,i){if(1&t&&(b.Sb(0,"mat-option",23),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.jc("value",t.id_provincia),b.Bb(1),b.Ec(" ",t.provincia," ")}}let x=(()=>{class t{constructor(t,i,e,o,n,a,d,c){this.dialogRef=t,this.snackBar=i,this.entidad=e,this.servicioProvincia=o,this.servicioZona=n,this.servicioEntidad=a,this.servicioTipoEntidad=d,this.servicioContactos=c}ngOnInit(){this.ENTIDAD=l.e,this.entidadForm=new s.h({id_entidad:new s.e(this.entidad.id_entidad,s.v.required),entidad:new s.e(this.entidad.entidad,s.v.required),id_zona:new s.e(this.entidad.id_zona,s.v.required),id_contacto:new s.e(this.entidad.id_contacto),id_tipo_entidad:new s.e(this.entidad.id_tipo_entidad),direccion:new s.e(this.entidad.direccion),cp:new s.e(this.entidad.cp),localidad:new s.e(this.entidad.localidad),id_provincia:new s.e(this.entidad.id_provincia),telefono:new s.e(this.entidad.telefono),email:new s.e(this.entidad.email),web:new s.e(this.entidad.web),codigo:new s.e(this.entidad.codigo),observaciones:new s.e(this.entidad.observaciones)}),this.getProvincias(),this.getZonas(),this.getTiposEntidad(),this.getDinamizadores()}confirmEdit(){return Object(a.a)(this,void 0,void 0,(function*(){if(this.entidadForm.valid){const t=this.entidadForm.value,i=yield this.servicioEntidad.editEntidad(t).toPromise();i.ok?(this.snackBar.open(i.message,l.a,{duration:5e3}),this.dialogRef.close({ok:i.ok,data:i.data})):this.snackBar.open(l.m,l.a,{duration:5e3})}else this.snackBar.open(l.m,l.a,{duration:5e3})}))}getProvincias(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioProvincia.getAllProvincias().toPromise();t.ok&&(this.provincias=t.data)}))}getZonas(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioZona.getAllZonas().toPromise();t.ok&&(this.zonas=t.data)}))}getTiposEntidad(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioTipoEntidad.getAllTiposEntidad().toPromise();t.ok&&(this.tipos_entidad=t.data)}))}getDinamizadores(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioContactos.getAllDinamizadores().toPromise();t.ok&&(this.contactos=t.data)}))}onNoClick(){this.dialogRef.close({ok:!1})}}return t.\u0275fac=function(i){return new(i||t)(b.Mb(m.f),b.Mb(h.a),b.Mb(m.a),b.Mb(p.a),b.Mb(f.a),b.Mb(u.a),b.Mb(g.a),b.Mb(S.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-edit-entidad"]],decls:68,vars:7,consts:[[1,"container"],["mat-dialog-title",""],[1,"mat-dialog-content",3,"formGroup"],[1,"form"],["color","accent"],["matInput","","placeholder","Entidad","formControlName","entidad","name","entidad","maxlength","100"],["matInput","","placeholder","C\xf3digo/CIF/NIF","formControlName","codigo","name","codigo","maxlength","100"],["formControlName","id_zona"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","id_contacto","required",""],["formControlName","id_tipo_entidad"],["matInput","","placeholder","Direcci\xf3n","formControlName","direccion","name","direccion","maxlength","100"],["matInput","","placeholder","CP","formControlName","cp","name","cp","maxlength","100"],["matInput","","placeholder","Localidad","formControlName","localidad","name","localidad","maxlength","100"],["formControlName","id_provincia"],["matInput","","placeholder","Tel\xe9fono","formControlName","telefono","name","telefono","maxlength","100"],["matInput","","placeholder","Email","formControlName","email","name","email","maxlength","100"],["matInput","","placeholder","Web","formControlName","web","name","web","maxlength","100"],["matInput","","placeholder","Observaciones","formControlName","observaciones","name","Observaciones"],["mat-dialog-actions",""],["mat-button","","id","onSubmit","type","submit",3,"disabled","click"],["mat-button","","id","onNoClick","tabindex","-1",3,"click"],[3,"value"]],template:function(t,i){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h3",1),b.Cc(2),b.Rb(),b.Sb(3,"form",2),b.Sb(4,"div",3),b.Sb(5,"mat-form-field",4),b.Nb(6,"input",5),b.Rb(),b.Rb(),b.Sb(7,"div",3),b.Sb(8,"mat-form-field",4),b.Nb(9,"input",6),b.Rb(),b.Rb(),b.Sb(10,"div",3),b.Sb(11,"mat-form-field"),b.Sb(12,"mat-label"),b.Cc(13,"Zona"),b.Rb(),b.Sb(14,"mat-select",7),b.Sb(15,"mat-option",8),b.Cc(16,"Sin zona"),b.Rb(),b.Bc(17,O,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(18,"div",3),b.Sb(19,"mat-form-field"),b.Sb(20,"mat-label"),b.Cc(21,"Dinamizador/a"),b.Rb(),b.Sb(22,"mat-select",10),b.Sb(23,"mat-option",8),b.Cc(24,"Sin dinamizador/a"),b.Rb(),b.Bc(25,P,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(26,"div",3),b.Sb(27,"mat-form-field"),b.Sb(28,"mat-label"),b.Cc(29,"Tipo Entidad"),b.Rb(),b.Sb(30,"mat-select",11),b.Sb(31,"mat-option",8),b.Cc(32,"Sin tipo entidad"),b.Rb(),b.Bc(33,j,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(34,"div",3),b.Sb(35,"mat-form-field",4),b.Nb(36,"input",12),b.Rb(),b.Rb(),b.Sb(37,"div",3),b.Sb(38,"mat-form-field",4),b.Nb(39,"input",13),b.Rb(),b.Rb(),b.Sb(40,"div",3),b.Sb(41,"mat-form-field",4),b.Nb(42,"input",14),b.Rb(),b.Rb(),b.Sb(43,"div",3),b.Sb(44,"mat-form-field"),b.Sb(45,"mat-label"),b.Cc(46,"Provincia"),b.Rb(),b.Sb(47,"mat-select",15),b.Sb(48,"mat-option",8),b.Cc(49,"Sin provincia"),b.Rb(),b.Bc(50,D,2,2,"mat-option",9),b.Rb(),b.Rb(),b.Rb(),b.Sb(51,"div",3),b.Sb(52,"mat-form-field",4),b.Nb(53,"input",16),b.Rb(),b.Rb(),b.Sb(54,"div",3),b.Sb(55,"mat-form-field",4),b.Nb(56,"input",17),b.Rb(),b.Rb(),b.Sb(57,"div",3),b.Sb(58,"mat-form-field",4),b.Nb(59,"input",18),b.Rb(),b.Rb(),b.Sb(60,"div",3),b.Sb(61,"mat-form-field",4),b.Nb(62,"textarea",19),b.Rb(),b.Rb(),b.Sb(63,"div",20),b.Sb(64,"button",21),b.Zb("click",(function(){return i.confirmEdit()})),b.Cc(65,"Guardar"),b.Rb(),b.Sb(66,"button",22),b.Zb("click",(function(){return i.onNoClick()})),b.Cc(67,"Cancelar"),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(2),b.Ec("Editar ",i.ENTIDAD,""),b.Bb(1),b.jc("formGroup",i.entidadForm),b.Bb(14),b.jc("ngForOf",i.zonas),b.Bb(8),b.jc("ngForOf",i.contactos),b.Bb(8),b.jc("ngForOf",i.tipos_entidad),b.Bb(17),b.jc("ngForOf",i.provincias),b.Bb(14),b.jc("disabled",!i.entidadForm.valid))},directives:[m.g,s.w,s.p,s.i,v.c,C.b,s.c,s.o,s.g,s.k,v.f,R.a,k.n,o.k,s.u,m.c,_.a],styles:[".container[_ngcontent-%COMP%]{margin:0 auto;min-width:30em;text-align:center;padding-top:10px}div.mat-dialog-actions[_ngcontent-%COMP%]{width:12em;margin:auto}.radioButton[_ngcontent-%COMP%]{text-align:left;margin-bottom:1em;padding-left:.2em}"]}),t})(),I=(()=>{class t{constructor(t,i,e,o){this.dialogRef=t,this.entidad=i,this.servicioEntidad=e,this.snackBar=o}ngOnInit(){this.ENTIDAD=l.e}onNoClick(){this.dialogRef.close({ok:!1})}confirmDelete(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioEntidad.deleteEntidad(this.entidad.id_entidad).toPromise();t.ok?(this.snackBar.open(t.message,l.a,{duration:5e3}),this.dialogRef.close({ok:t.ok,data:t.data})):this.snackBar.open(t.message,l.a,{duration:5e3})}))}}return t.\u0275fac=function(i){return new(i||t)(b.Mb(m.f),b.Mb(m.a),b.Mb(u.a),b.Mb(h.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-delete-entidad"]],decls:13,vars:5,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","id","deleteEntidad",3,"click"],["mat-button","","id","onNoClick","tabindex","-1",3,"click"]],template:function(t,i){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h3",1),b.Cc(2),b.Rb(),b.Sb(3,"div",2),b.Cc(4),b.Nb(5,"p"),b.Cc(6),b.Nb(7,"p"),b.Rb(),b.Sb(8,"div",3),b.Sb(9,"button",4),b.Zb("click",(function(){return i.confirmDelete()})),b.Cc(10),b.Rb(),b.Sb(11,"button",5),b.Zb("click",(function(){return i.onNoClick()})),b.Cc(12,"Cancelar"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(2),b.Ec("\xbfSeguro que deseas eliminar esta ",i.ENTIDAD,"?"),b.Bb(2),b.Ec(" Id: ",i.entidad.id_entidad," "),b.Bb(2),b.Fc(" ",i.ENTIDAD,": ",i.entidad.entidad," "),b.Bb(4),b.Ec("Eliminar ",i.ENTIDAD,""))},directives:[m.g,m.d,m.c,_.a],styles:[""]}),t})();var z=e("gkmA"),M=e("0EQZ"),F=e("rDax");class T{constructor(t,i){this._document=i;const e=this._textarea=this._document.createElement("textarea"),o=e.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",e.setAttribute("aria-hidden","true"),e.value=t,this._document.body.appendChild(e)}copy(){const t=this._textarea;let i=!1;try{if(t){const e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),i=this._document.execCommand("copy"),e&&e.focus()}}catch(e){}return i}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let Z=(()=>{class t{constructor(t){this._document=t}copy(t){const i=this.beginCopy(t),e=i.copy();return i.destroy(),e}beginCopy(t){return new T(t,this._document)}}return t.\u0275fac=function(i){return new(i||t)(b.Wb(o.d))},t.\u0275prov=Object(b.Ib)({factory:function(){return new t(Object(b.Wb)(o.d))},token:t,providedIn:"root"}),t})();var A=e("NFeN"),$=e("bSwM");function G(t,i){if(1&t&&(b.Sb(0,"th",15),b.Nb(1,"input",16),b.Nb(2,"span",17),b.Rb()),2&t){const t=b.dc();b.Bb(1),b.jc("formControl",t.idEntidadFilter)}}function q(t,i){if(1&t&&(b.Sb(0,"td",18),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.Bb(1),b.Ec(" ",t.id_entidad," ")}}function J(t,i){if(1&t&&(b.Sb(0,"th",15),b.Nb(1,"input",19),b.Nb(2,"span",17),b.Rb()),2&t){const t=b.dc();b.Bb(1),b.jc("formControl",t.entidadFilter)}}function V(t,i){if(1&t&&(b.Sb(0,"td",18),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.Bb(1),b.Ec(" ",t.entidad,"")}}function L(t,i){if(1&t&&(b.Sb(0,"th",15),b.Nb(1,"input",20),b.Nb(2,"span",17),b.Rb()),2&t){const t=b.dc();b.Bb(1),b.jc("formControl",t.idTipoEntidadFilter)}}function Q(t,i){if(1&t&&(b.Sb(0,"td",18),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.Bb(1),b.Ec(" ",t.fk_tipo_entidad,"")}}function K(t,i){if(1&t&&(b.Sb(0,"th",15),b.Nb(1,"input",21),b.Nb(2,"span",17),b.Rb()),2&t){const t=b.dc();b.Bb(1),b.jc("formControl",t.idZonaFilter)}}function W(t,i){if(1&t&&(b.Sb(0,"td",18),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.Bb(1),b.Ec(" ",t.fk_zona,"")}}function H(t,i){if(1&t&&(b.Sb(0,"th",15),b.Nb(1,"input",22),b.Nb(2,"span",17),b.Rb()),2&t){const t=b.dc();b.Bb(1),b.jc("formControl",t.idContactoFilter)}}function X(t,i){if(1&t&&(b.Sb(0,"td",18),b.Cc(1),b.Rb()),2&t){const t=i.$implicit;b.Bb(1),b.Ec(" ",t.fk_contacto,"")}}function U(t,i){if(1&t){const t=b.Tb();b.Sb(0,"th",15),b.Sb(1,"button",23),b.Zb("click",(function(){return b.tc(t),b.dc().addEntidad()})),b.Sb(2,"mat-icon"),b.Cc(3," add_circle "),b.Rb(),b.Rb(),b.Sb(4,"button",23),b.Zb("click",(function(){return b.tc(t),b.dc().getContactos()})),b.Sb(5,"mat-icon"),b.Cc(6," mail "),b.Rb(),b.Rb(),b.Sb(7,"mat-checkbox",24),b.Zb("change",(function(i){return b.tc(t),b.dc().chooseAllPublicacion(i)})),b.Rb(),b.Rb()}if(2&t){const t=b.dc();b.Bb(7),b.jc("checked",t.isChecked)}}function Y(t,i){if(1&t){const t=b.Tb();b.Sb(0,"td",18),b.Sb(1,"button",23),b.Zb("click",(function(){b.tc(t);const e=i.$implicit;return b.dc().datosEntidad(e)})),b.Sb(2,"mat-icon"),b.Cc(3," assignment "),b.Rb(),b.Rb(),b.Sb(4,"button",23),b.Zb("click",(function(){b.tc(t);const e=i.$implicit;return b.dc().deleteEntidad(e)})),b.Sb(5,"mat-icon"),b.Cc(6," delete "),b.Rb(),b.Rb(),b.Sb(7,"mat-checkbox",24),b.Zb("change",(function(e){b.tc(t);const o=i.$implicit;return b.dc().chooseEntidad(o.id_entidad,e)})),b.Rb(),b.Rb()}if(2&t){const t=i.$implicit;b.Bb(7),b.jc("checked",t.checked)}}function tt(t,i){1&t&&b.Nb(0,"tr",25)}const it=function(t){return{selected:t}};function et(t,i){if(1&t){const t=b.Tb();b.Sb(0,"tr",26),b.Zb("click",(function(){b.tc(t);const e=i.$implicit;return b.dc().selection.select(e)}))("dblclick",(function(){b.tc(t);const e=i.$implicit;return b.dc().datosEntidad(e)})),b.Rb()}if(2&t){const t=i.$implicit,e=b.dc();b.jc("ngClass",b.nc(1,it,e.selection.isSelected(t)))}}const ot=function(){return[5,10,25]},nt=[{path:"",component:(()=>{class t{constructor(t,i,e,o,n,a,d,r,l){this.dialog=t,this.entidadesService=i,this.servicioZona=e,this.servicioTipoEntidad=o,this.servicioProvincia=n,this.servicioContacto=a,this.overlay=d,this.clipboard=r,this.snackBar=l,this.dataSource=new c.k,this.idEntidadFilter=new s.e,this.entidadFilter=new s.e,this.idTipoEntidadFilter=new s.e,this.idZonaFilter=new s.e,this.idContactoFilter=new s.e,this.entidadesSelected=[],this.isChecked=!1,this.isCheckedAll=!1,this.filterValues={id_entidad:"",entidad:"",id_tipo_entidad:"",id_zona:"",id_contacto:""}}ngOnInit(){this.getEntidades()}getEntidades(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.entidadesService.getAllEntidades().toPromise();this.permises=t.permises,t.ok&&(this.entidadesService.entidades=t.data,this.displayedColumns=["entidad","id_tipo_entidad","id_zona","id_contacto","actions"],this.dataSource.data=this.entidadesService.entidades,this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=this.createFilter(),this.selection=new M.c(!1,[this.entidad]),this.onChanges())}))}addEntidad(){return Object(a.a)(this,void 0,void 0,(function*(){const t=this.dialog.open(y,{scrollStrategy:this.overlay.scrollStrategies.noop(),disableClose:!0}),i=yield t.afterClosed().toPromise();i&&i.ok&&this.ngOnInit()}))}editEntidad(t){return Object(a.a)(this,void 0,void 0,(function*(){const i=this.dialog.open(x,{data:t,scrollStrategy:this.overlay.scrollStrategies.noop()}),e=yield i.afterClosed().toPromise();e&&e.ok&&this.ngOnInit()}))}deleteEntidad(t){return Object(a.a)(this,void 0,void 0,(function*(){const i=this.dialog.open(I,{data:t,scrollStrategy:this.overlay.scrollStrategies.noop()}),e=yield i.afterClosed().toPromise();e&&e.ok&&this.ngOnInit()}))}changePage(){this.isChecked=!!this.isCheckedAll||(this.pageIndexChecked+1)*this.pageSizeChecked/((this.dataSource.paginator.pageIndex+1)*this.dataSource.paginator.pageSize)>=1}chooseAllPublicacion(t){this.isChecked=t.checked,this.entidadesSelected=this.entidadesSelected;const i=this.dataSource.paginator.pageSize*this.dataSource.paginator.pageIndex,e=this.dataSource.paginator.pageSize*(this.dataSource.paginator.pageIndex+1);let o=0;t.checked?(this.pageIndexChecked=this.dataSource.paginator.pageIndex,this.pageSizeChecked=this.dataSource.paginator.pageSize,this.dataSource.filteredData.forEach(t=>{o>=i&&o<e&&!0!==t.checked&&(t.checked=!0,this.entidadesSelected.push(t)),o++}),this.entidadesSelected.length<this.dataSource.filteredData.length&&this.openSnackbarChooseAllPublicacion()):(this.isCheckedAll=!1,this.entidadesSelected=[],this.pageIndexChecked=0,this.pageSizeChecked=0,this.dataSource.filteredData.forEach(t=>{t.checked=!1}))}openSnackbarChooseAllPublicacion(){this.snackBar.open(`Deseas Seleccionar los ${this.dataSource.filteredData.length} resultados`,"Seleccionar",{duration:5e3}).afterDismissed().subscribe(t=>{!0===t.dismissedByAction&&(this.isCheckedAll=!0,this.entidadesSelected=[],this.dataSource.filteredData.forEach(t=>{this.entidadesSelected.push(t),t.checked=!0}))})}getContactos(){return Object(a.a)(this,void 0,void 0,(function*(){const t=[];if(this.entidadesSelected.filter(i=>{t.push(i.id_entidad.toString())}),t.length>0){const i=yield this.entidadesService.getContactos(t).toPromise();console.log(i),i?i.ok?(this.clipboard.copy(i.data),this.snackBar.open(i.message,l.a,{duration:5e3})):this.snackBar.open(i.message,l.a,{duration:5e3}):this.snackBar.open(l.m,l.a,{duration:5e3})}}))}chooseEntidad(t,i){i.checked?this.dataSource.filteredData.filter(i=>{i.id_entidad===t&&(this.entidadesSelected.push(i),i.checked=!0)}):this.entidadesSelected=this.entidadesSelected.filter(i=>(i.id_entidad===t&&(i.checked=!1),t!==i.id_entidad))}getProvincias(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioProvincia.getAllProvincias().toPromise();if(t.ok)return t.data}))}getZonas(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioZona.getAllZonas().toPromise();if(t.ok)return t.data}))}getTiposEntidad(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioTipoEntidad.getAllTiposEntidad().toPromise();if(t.ok)return t.data}))}getDinamizadores(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.servicioContacto.getAllDinamizadores().toPromise();if(t.ok)return t.data}))}datosEntidad(t){return Object(a.a)(this,void 0,void 0,(function*(){const i=t,e=yield this.getDinamizadores(),o=yield this.getTiposEntidad(),n=yield this.getProvincias(),a=yield this.getZonas();if(i){const t=this.dialog.open(z.a,{width:"70em",maxWidth:"70em",scrollStrategy:this.overlay.scrollStrategies.noop(),disableClose:!0,data:{entidad:i,contactos:e,tipos_entidad:o,provincias:n,zonas:a}});yield t.afterClosed().toPromise(),yield this.getEntidades()}}))}createFilter(){return(t,i)=>{const e=JSON.parse(i);return-1!==t.id_entidad.toString().indexOf(e.id_entidad)&&-1!==t.entidad.toLowerCase().indexOf(e.entidad.toLowerCase())&&-1!==t.fk_tipo_entidad.toLowerCase().indexOf(e.id_tipo_entidad.toLowerCase())&&-1!==t.fk_zona.toLowerCase().indexOf(e.id_zona.toLowerCase())&&-1!==t.fk_contacto.toLowerCase().indexOf(e.id_contacto.toLowerCase())}}onChanges(){this.idEntidadFilter.valueChanges.subscribe(t=>{this.filterValues.id_entidad=t,this.dataSource.filter=JSON.stringify(this.filterValues)}),this.entidadFilter.valueChanges.subscribe(t=>{this.filterValues.entidad=t,this.dataSource.filter=JSON.stringify(this.filterValues)}),this.idTipoEntidadFilter.valueChanges.subscribe(t=>{this.filterValues.id_tipo_entidad=t,this.dataSource.filter=JSON.stringify(this.filterValues)}),this.idZonaFilter.valueChanges.subscribe(t=>{this.filterValues.id_zona=t,this.dataSource.filter=JSON.stringify(this.filterValues)}),this.idContactoFilter.valueChanges.subscribe(t=>{this.filterValues.id_contacto=t,this.dataSource.filter=JSON.stringify(this.filterValues)})}}return t.\u0275fac=function(i){return new(i||t)(b.Mb(m.b),b.Mb(u.a),b.Mb(f.a),b.Mb(g.a),b.Mb(p.a),b.Mb(S.a),b.Mb(F.c),b.Mb(Z),b.Mb(h.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-entidades"]],viewQuery:function(t,i){var e;1&t&&(b.xc(d.a,!0),b.xc(r.a,!0)),2&t&&(b.pc(e=b.ac())&&(i.paginator=e.first),b.pc(e=b.ac())&&(i.sort=e.first))},decls:25,vars:6,consts:[[1,"example-container","mat-elevation-z8"],[1,"example-table-container"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id_entidad"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","entidad"],["matColumnDef","id_tipo_entidad"],["matColumnDef","id_zona"],["matColumnDef","id_contacto"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click","dblclick",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions","page"],["paginator",""],["mat-header-cell",""],["matInput","","placeholder","Id",3,"formControl"],["mat-sort-header",""],["mat-cell",""],["matInput","","placeholder","Entidad",3,"formControl"],["matInput","","placeholder","Tipo Entidad",3,"formControl"],["matInput","","placeholder","Zona",3,"formControl"],["matInput","","placeholder","Dinamizador",3,"formControl"],["mat-icon-button","",3,"click"],[3,"checked","change"],["mat-header-row",""],["mat-row","",3,"ngClass","click","dblclick"]],template:function(t,i){1&t&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"table",2),b.Qb(3,3),b.Bc(4,G,3,1,"th",4),b.Bc(5,q,2,1,"td",5),b.Pb(),b.Qb(6,6),b.Bc(7,J,3,1,"th",4),b.Bc(8,V,2,1,"td",5),b.Pb(),b.Qb(9,7),b.Bc(10,L,3,1,"th",4),b.Bc(11,Q,2,1,"td",5),b.Pb(),b.Qb(12,8),b.Bc(13,K,3,1,"th",4),b.Bc(14,W,2,1,"td",5),b.Pb(),b.Qb(15,9),b.Bc(16,H,3,1,"th",4),b.Bc(17,X,2,1,"td",5),b.Pb(),b.Qb(18,10),b.Bc(19,U,8,1,"th",4),b.Bc(20,Y,8,1,"td",5),b.Pb(),b.Bc(21,tt,1,0,"tr",11),b.Bc(22,et,1,3,"tr",12),b.Rb(),b.Rb(),b.Sb(23,"mat-paginator",13,14),b.Zb("page",(function(){return i.changePage()})),b.Rb(),b.Rb()),2&t&&(b.Bb(2),b.jc("dataSource",i.dataSource),b.Bb(19),b.jc("matHeaderRowDef",i.displayedColumns),b.Bb(1),b.jc("matRowDefColumns",i.displayedColumns),b.Bb(1),b.jc("pageSize",10)("pageSizeOptions",b.mc(5,ot)))},directives:[c.j,r.a,c.c,c.e,c.b,c.g,c.i,d.a,c.d,C.b,s.c,s.o,s.f,r.b,c.a,_.a,A.a,$.a,c.f,c.h,o.j],styles:[".mat-column-entidad[_ngcontent-%COMP%]{width:30%!important;padding-right:1em!important;word-wrap:break-word!important}.mat-column-id_contacto[_ngcontent-%COMP%], .mat-column-id_tipo_entidad[_ngcontent-%COMP%], .mat-column-id_zona[_ngcontent-%COMP%]{width:20%!important;padding-right:1em!important;word-wrap:break-word!important}.mat-column-actions[_ngcontent-%COMP%]{width:4em!important;padding-right:0!important;word-wrap:break-word!important}.selected[_ngcontent-%COMP%]   .mat-cell.blanco[_ngcontent-%COMP%]{color:#fff!important}.selected[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{background-color:rgba(114,109,254,.6862745098039216)}"]}),t})()}];let at=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(i){return new(i||t)},imports:[[n.f.forChild(nt)],n.f]}),t})();var dt=e("ah4G");const ct=[{path:"",component:z.a,redirectTo:"datos-entidad-reunion"},{path:"datos-basicos-entidad",loadChildren:()=>e.e(17).then(e.bind(null,"pvT9")).then(t=>t.DatosBasicosEntidadModule),outlet:"sidebar"},{path:"contactos-entidad",loadChildren:()=>Promise.all([e.e(1),e.e(9)]).then(e.bind(null,"sHgW")).then(t=>t.ContactosEntidadModule),outlet:"sidebar"},{path:"unidades",loadChildren:()=>Promise.all([e.e(1),e.e(10)]).then(e.bind(null,"Hw+l")).then(t=>t.UnidadesModule),outlet:"sidebar"}];let rt=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(i){return new(i||t)},imports:[[n.f.forChild(ct)],n.f]}),t})(),st=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(i){return new(i||t)},imports:[[o.c,rt,dt.a]]}),t})(),lt=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(i){return new(i||t)},imports:[[o.c,at,dt.a,st]]}),t})()}}]);