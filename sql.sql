

drop table sig_materialselected;
crea


alter table sig_toolselected add FOREIGN KEY (cod_visit) REFERENCES sig_registervisit(visit_id);
alter table sig_materialselected add FOREIGN KEY (id_material) REFERENCES sig_materials(idmaterial)
alter table sig_photos add FOREIGN KEY (id_registervisit) REFERENCES sig_registervisit(visit_id)

truncate table sig_machinaryselected;
alter table sig_schedulevisits add FOREIGN KEY (client_clientid) REFERENCES sig_clients(idclient);
alter table sig_schedulevisits add FOREIGN KEY (user_userid) REFERENCES sig_users(iduser);

alter table sig_registervisit add FOREIGN KEY (visit_id) REFERENCES sig_schedulevisits(schedule_id);

alter table sig_workforceselected drop FOREIGN key sig_workforceselected_ibfk_1;
alter table sig_workforceselected drop FOREIGN key sig_workforceselected_ibfk_2;

CREATE TABLE `sig_materialselected` (
  cod_visit int(11) NOT NULL,
  id_material int(11) NOT NULL,
  count int(11) DEFAULT NULL,
  precio int(11) DEFAULT NULL,
  porcentage int(11) DEFAULT NULL,
  primary key(cod_visit,id_material),
  FOREIGN KEY (cod_visit) REFERENCES sig_registervisit(visit_id),
    FOREIGN KEY (id_material) REFERENCES sig_materials(idmaterial)
);


select code codigo,name Material,count cant,price precio, (count*price) valorTotal from sig_clients join sig_schedulevisits on idclient=client_clientid join sig_users on iduser=user_userid join sig_registervisit on visit_id=schedule_id join sig_materialselected ms on visit_id=ms.cod_visit join sig_materials on idmaterial=id_material where visit_id=2

truncate table sig_temp;

select * from sig_clients join sig_schedulevisits on idclient=client_clientid
                          join sig_users on iduser=user_userid 
                          join sig_registervisit on visit_id=schedule_id
                          join sig_materialselected ms on visit_id=ms.cod_visit 
                          join sig_materials on idmaterial=id_material
                          where visit_id=2;
                          


                          sig_materialselected
CREATE TABLE `sig_machinaryselected` (
 `cod_visit` int(11) NOT NULL,
 `id_machinary` int(11) NOT NULL,
 `count` int(11) DEFAULT NULL,
 `precio` int(11) DEFAULT NULL,
 `porcentage` int(11) DEFAULT NULL,
 PRIMARY KEY (`cod_visit`,`id_material`)
);




DELIMITER $$
CREATE DEFINER=`phpmyadmin`@`localhost` PROCEDURE `loadDataInfile`(IN `tabla` VARCHAR(50))
BEGIN
DECLARE done BOOLEAN DEFAULT FALSE;
DECLARE cod integer;
DECLARE pre integer;
DECLARE c1 CURSOR FOR SELECT t.codigo, t.vr_unit FROM sig_temp t JOIN sig_category ca WHERE t.clasif = ca.category_name;
DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = TRUE;
open c1;
  c1_loop: LOOP
    fetch c1 into cod, pre;
  IF done THEN 
        if(cod != 0)then
              IF tabla = "sig_materials" THEN
              INSERT INTO sig_materials(code,name,unit,price,idCategory)
              SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                  FROM sig_temp t
                  JOIN sig_category ca
                  WHERE t.clasif = ca.category_name
                  and ca.category_type=1
              ON DUPLICATE KEY UPDATE                              
          ELSEIF tabla = "sig_tools" THEN 
                  INSERT INTO sig_materials(code,name,unit,price,idcategory)
                  SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                      FROM sig_temp t
                      JOIN sig_category ca
                      WHERE t.clasif = ca.category_name
                      and ca.category_type=2
                  ON DUPLICATE KEY UPDATE
                      price=pre; 
          ELSEIF tabla = "sig_machinaries" THEN 
                      INSERT INTO sig_materials(code,name,unit,price,idcategory)
                      SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                          FROM sig_temp t
                          JOIN sig_category ca
                          WHERE t.clasif = ca.category_name
                          and ca.category_type=3
                      ON DUPLICATE KEY UPDATE
                          price=pre;  
          ELSEIF tabla = "sig_workforce" THEN 
                          INSERT INTO sig_materials(code,name,unit,price,idcategory)
                          SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                              FROM sig_temp t
                              JOIN sig_category ca
                              WHERE t.clasif = ca.category_name
                              and ca.category_type=4
                          ON DUPLICATE KEY UPDATE
                              price=pre;  
          END IF;
      END IF;
      LEAVE c1_loop; 
      END IF; 
  END LOOP c1_loop;
CLOSE c1;

END$$
DELIMITER ;





delimiter //

CREATE PROCEDURE loadDataInfile(IN tabla VARCHAR(50))
BEGIN
    DECLARE done BOOLEAN DEFAULT FALSE;
    DECLARE cod integer;
    DECLARE pre integer;
    DECLARE c1 CURSOR FOR SELECT t.codigo, t.vr_unit FROM sig_temp t JOIN sig_category ca WHERE t.clasif = ca.category_name;
    DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = TRUE;
    open c1;
    c1_loop: LOOP
      fetch c1 into cod, pre;
    IF done THEN 
     LEAVE c1_loop; 
        END IF; 
           if(cod != 0)then
                IF tabla = "sig_materials" THEN
                INSERT INTO sig_materials(code,name,unit,price,idCategory)
                SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                    FROM sig_temp t
                    JOIN sig_category ca
                    WHERE t.clasif = ca.category_name
                    and ca.category_type=1
                ON DUPLICATE KEY UPDATE
                     price = IF(code = cod, pre, price);
     
            ELSEIF tabla = "sig_tools" THEN 
                    INSERT INTO sig_materials(code,name,unit,price,idcategory)
                    SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                        FROM sig_temp t
                        JOIN sig_category ca
                        WHERE t.clasif = ca.category_name
                        and ca.category_type=2
                    ON DUPLICATE KEY UPDATE
                         price = IF(code = cod, pre, price);
             ELSEIF tabla = "sig_machinaries" THEN 
                        INSERT INTO sig_materials(code,name,unit,price,idcategory)
                        SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                            FROM sig_temp t
                            JOIN sig_category ca
                            WHERE t.clasif = ca.category_name
                            and ca.category_type=3
                        ON DUPLICATE KEY UPDATE
                             price = IF(code = cod, pre, price);  
            ELSEIF tabla = "sig_workforce" THEN 
                            INSERT INTO sig_materials(code,name,unit,price,idcategory)
                            SELECT t.codigo, t.descripcion, t.und, t.vr_unit, ca.id_category
                                FROM sig_temp t
                                JOIN sig_category ca
                                WHERE t.clasif = ca.category_name
                                and ca.category_type=4
                            ON DUPLICATE KEY UPDATE
                                 price = IF(code = cod, pre, price);  
            END IF;
        END IF;
       
    END LOOP c1_loop;
    CLOSE c1;

END
//
delimiter ;