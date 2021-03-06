
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.gradle.language.jvm.tasks.ProcessResources

plugins {
	id("java")
	id("org.springframework.boot") version "2.2.0.RELEASE"
	id("io.spring.dependency-management") version "1.0.8.RELEASE"
	kotlin("jvm") version "1.3.50"
	kotlin("plugin.spring") version "1.3.50"

}



group = "com.mosa.office"
version = project.findProperty("VERSION") ?: "NO_VERSION_SPECIFIED"
java.sourceCompatibility = JavaVersion.VERSION_1_8

val developmentOnly by configurations.creating
configurations {
	runtimeClasspath {
		extendsFrom(developmentOnly)
	}
}

repositories {
	mavenCentral()
	jcenter()
//	maven(url = "https://dl.bintray.com/kotlin/exposed")
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("com.google.firebase:firebase-admin:6.8.1")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	testImplementation("org.springframework.boot:spring-boot-starter-test") {
		exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
	}
	testCompile("org.assertj:assertj-core:3.9.0")
	compile("org.jetbrains.exposed", "exposed-core", "0.23.1")
	compile("org.jetbrains.exposed", "exposed-dao", "0.23.1")
	compile("org.jetbrains.exposed", "exposed-jdbc", "0.23.1")
	compile("org.jetbrains.exposed:exposed-java-time:0.21.1")
	compile("com.h2database","h2", "1.4.199")
	runtime("org.postgresql","postgresql","42.2.5")
}

(tasks.getByName("processResources") as ProcessResources).apply {
	filesMatching("**/application-deploy.properties") {
		expand(mutableMapOf("version" to version))
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}
