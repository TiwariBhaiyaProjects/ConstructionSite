import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Home, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/companyData";

const Blog = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/modi-bridge-walk.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Construction Knowledge Hub
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            SEO-focused guides for home construction cost, G+2 building
            planning, material selection and house map ideas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-9 h-9 text-primary" />
                <div>
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                    SEO Blog
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Helpful articles for clients
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden bg-card group">
                    <div className="h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-5">
                        {post.excerpt}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                      >
                        Ask About This Topic
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <Search className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">SEO topics to publish next</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>1000 sq ft house cost in Patna</li>
                    <li>Duplex house construction cost</li>
                    <li>Foundation cost for G+2 building</li>
                    <li>Best tiles for budget home</li>
                    <li>Stage-wise payment plan for construction</li>
                    <li>Home renovation cost per sq ft</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Need project-specific advice?
                  </h3>
                  <p className="text-primary-foreground/80 mb-5">
                    Blog gives general guidance. For actual cost, use plot size
                    and package in the calculator.
                  </p>
                  <Button variant="secondary" asChild className="w-full">
                    <Link to="/calculator">Open Cost Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
